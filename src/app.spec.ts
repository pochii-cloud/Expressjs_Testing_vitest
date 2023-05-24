const app=require('./app')
const request=require('supertest')

describe("POST /book", () => {
    it('should create a new book', async () => {
        const response = await request(app)
          .post('/book')
          .send({ title: 'Test Book', description: 'This is a test book' });
    
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe('Test Book');
        expect(response.body.description).toBe('This is a test book');
      });
});
