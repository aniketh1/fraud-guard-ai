# Credit Card Fraud Detection

This project is a **Credit Card Fraud Detection** application built using **React** for the frontend and **Flask** for the backend. The app predicts whether a credit card transaction is fraudulent based on a set of features using multiple machine learning models (Logistic Regression, Random Forest, and Gradient Boosting).

## Features

- **Frontend (React):**
  - Form to input transaction details (Time, Amount, and 28 features).
  - Displays the fraud prediction result.
  - CORS handling using a proxy server to make requests to the backend.

- **Backend (Flask):**
  - Handles prediction requests from the frontend.
  - Implements multiple models to make predictions on transactions.
  - Scales the data and applies PCA before making predictions.

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS (for styling)
  
- **Backend:**
  - Python
  - Flask
  - Scikit-learn (for ML models)

- **Deployment:**
  - Frontend: [Vercel](https://fraud-guard-ai-4vv3-9timkikh0-anikets-projects-464957ff.vercel.app/)
  - Backend: [Render](https://fraud-gaurd-api.onrender.com)
  - CORS: [CORS Anywhere](https://cors-anywhere.herokuapp.com/corsdemo)

## Team Members

- **Member 1:** [Your Name]
- **Member 2:** [Team Member's Name]

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine
- Python and pip installed (for the backend)
  
### Frontend (React) Setup

1. Clone this repository.
2. Navigate to the `frontend` folder (or wherever your React project is).
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open the app in your browser at `http://localhost:3000`.

### Backend (Flask) Setup

1. Navigate to the `backend` folder (or wherever your Flask app is).
2. Create a virtual environment (optional but recommended):
    ```bash
    python -m venv venv
    ```
3. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
4. Start the Flask server:
    ```bash
    python app.py
    ```
5. The Flask app will be running on `http://localhost:5000`.

### Deployment

- The **frontend** is deployed on [Vercel](https://fraud-guard-ai-4vv3-9timkikh0-anikets-projects-464957ff.vercel.app/), and the **backend** is deployed on [Render](https://fraud-gaurd-api.onrender.com).
- The **CORS Anywhere** proxy is available temporarily for making CORS requests during development at [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo).

## How to Use

1. Open the app at [Frontend URL](https://fraud-guard-ai-4vv3-9timkikh0-anikets-projects-464957ff.vercel.app/).
2. Input transaction details (Time, Amount, and Features V1 to V28).
3. Submit the form to see the fraud prediction result.
4. If you encounter CORS issues during the request, use the CORS proxy by clicking the **"Request CORS"** button at [CORS Anywhere](https://cors-anywhere.herokuapp.com/corsdemo).

### Example

You can use the deployed frontend app to interact with the backend and get fraud predictions. Here’s a brief description of what each part does:
- **Time**: Time of the transaction (in seconds).
- **Amount**: The amount of the transaction.
- **Features (V1 to V28)**: These are numerical features used for fraud detection.

After you submit the form, the prediction will be displayed, indicating whether the transaction is **fraudulent** or **legitimate**.

## Troubleshooting

- **CORS Error**: 
  - If you face CORS issues while making requests from the frontend to the backend, use the **CORS Anywhere** proxy temporarily by clicking the **"Request CORS"** button at [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo).
  
- **Model or Input Errors**: Ensure all required input fields are filled correctly, including the 28 feature values.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
