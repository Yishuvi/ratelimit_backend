# Rate-Limited Product API (Express.js)

This is a simple REST API built with **Node.js** and **Express**, featuring **rate limiting** to prevent abuse and a `/api/products` endpoint that returns mock product data.

##  Features

-  Express.js REST API
-  Rate limiting: Max 5 requests per minute per IP
-  Mock product data
-  CORS enabled for frontend access
-  Simple to deploy on AWS, Render, or any Node-friendly platform

---

## Endpoint

### `GET /api/products`

Returns a list of products.

#### Example Response:
```json
{
  "success": true,
  "data": [
    { "id": 1, "name": "Laptop", "price": 999 },
    { "id": 2, "name": "Phone", "price": 499 }
  ]
}
