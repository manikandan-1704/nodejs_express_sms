# SMS Sending API with Node.js and Twilio

This project is a simple Express.js-based API that allows sending SMS messages using Twilio. It includes environment configuration, SMS handling, and API endpoints.

## 🚀 Features
- Send SMS using Twilio API
- RESTful API with Express.js
- Shows message timestamps (Moment.js)
- Simple and responsive UI


## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/manikandan-1704/nodejs_express_sms.git
    ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Configure environment variables**
- Create a .env file in the project root and add the following:
    ```bash
    TWILIO_ACCOUNT_SID=your_account_sid
    TWILIO_AUTH_TOKEN=your_auth_token
    TWILIO_PHONE_NUMBER=your_twilio_phone_number
    ```
4. **Run the server**
    ```bash
    npm run dev
    ```

## API Endpoints
1. **Send SMS**
**Endpoint:** POST /send-sms

Request Body:
```bash
{
  "phone": "+1234567890",
  "message": "Hello from Node.js!"
}
```
Response:
```bash
{
  "success": true,
  "response": "Message SID"
}
```

## Author
Created by **Manikandan**

## ✨ Happy Coding! 🚀

## Thankyou
