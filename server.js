import express from "express"; 
import rateLimit from "express-rate-limit";
import cors from "cors";

const app = express();
app.use(cors());

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
  max: 5,
  message: "Too many requests from this IP, please try again after a minute.",
});

app.use('/api/', limiter);

const mockProducts = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 499 },
    { id: 3, name: "Smart Watch", price: 199 },
  { id: 4, name: "Wireless Earbuds", price: 149 },
  { id: 5, name: "Gaming Mouse", price: 59 },
  { id: 6, name: "Mechanical Keyboard", price: 129 },
  { id: 7, name: "Monitor 24\"", price: 229 },
  { id: 8, name: "USB-C Hub", price: 39 },
  { id: 9, name: "Webcam HD", price: 89 },
  { id: 10, name: "External Hard Drive 1TB", price: 79 },
  { id: 11, name: "Graphic Tablet", price: 109 },
  ];

  app.get('/api/products', (req, res) => {
    res.json({
      success: true,
      data: mockProducts,
    });
  });

  const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

