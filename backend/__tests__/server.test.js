const request = require('supertest');
const express = require('express');

// Create a basic Express app for testing
const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

app.get('/api/test', (req, res) => {
    res.status(200).json({ message: 'API is working' });
});

describe('Server Tests', () => {
    test('GET /health should return 200', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ status: 'OK', message: 'Server is running' });
    });

    test('GET /api/test should return 200', async () => {
        const response = await request(app).get('/api/test');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'API is working' });
    });

    test('GET /nonexistent should return 404', async () => {
        const response = await request(app).get('/nonexistent');
        expect(response.status).toBe(404);
    });
}); 