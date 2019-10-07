import axios from 'axios';
import querystring from 'querystring';

const API_KEY = process.env.REACT_APP_MAILCHIMP_API_KEY;

const headers = {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Headers": "Content-Type"
};

export async function handler(event, context) {
  console.log('are we here?');
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 200,
      body: 'Method Not Allowed',
      headers,
    };
  }
  const params = querystring.parse(event.body);
  try {
    const {
      firstName,
      lastName,
      email,
      zip,
      phone,
    } = params;
    
    // do mailchimp stuff here

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: 'success' }),
      headers,
    }
  } catch (e) {
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: e.message }),
      headers,
    }
  }
};
