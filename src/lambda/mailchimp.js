import axios from 'axios';
import Mailchimp from 'mailchimp-api-v3';

const apiKey = process.env.REACT_APP_MAILCHIMP_KEY;
const listId = process.env.REACT_APP_LIST_ID;

const mailchimp = new Mailchimp(apiKey);

const headers = {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Headers": "Content-Type"
};

const ERROR_EXISTS = 'Member Exists';

export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 200,
      body: 'Method Not Allowed',
      headers,
    };
  }
  const params = JSON.parse(event.body);
  try {
    const {
      firstName,
      lastName,
      email,
      zip,
      phone,
    } = params;
    
    const path = `/lists/${listId}/members`;
    const response = await mailchimp.post(path, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        PHONE: phone,
        ZIP: zip,
        ADDRESS: '',
      },
    })
    return {
        statusCode: 200,
        body: JSON.stringify({ msg: 'success', response }),
        headers,
    };
  } catch (e) {
    if (e.title === ERROR_EXISTS) {
      return {
          statusCode: 200,
          body: JSON.stringify({ msg: 'success' }),
          headers,
      };
    }
    return {
      statusCode: 400,
      body: JSON.stringify({ msg: e.message }),
      headers,
    }
  }
};
