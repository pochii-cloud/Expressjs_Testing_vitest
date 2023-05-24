import express, { Request, Response } from "express";

const app = express();

interface Book {
  id: number;
  title: string;
  description: string;
}
const books: Book[] = [];

app.get("/books", (req: Request, res: Response) => {
  res.status(200).json(books);
});


app.post('/book', (req: Request, res: Response) => {

    const{title,description}=req.body
     const book:Book={
       id:books.length+1,
       title,
       description
     }
  
    books.push(book);
    res.status(201).json(book);
  });



app.get("/book/:id", (req: Request<{ id: number }>, res: Response) => {
  const id = +req.params.id;
  const book = books.find((book: Book) => {
    return book.id === id;
  });
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "book not found" });
  }
});


app.put('/book/:id',(req:Request<{id:number}>,res:Response)=>{
    const id=req.params.id
    const book=books.find(book=>{
        book.id === id
    })
    if(book){
        console.log('book updated')
    }
    else{
        console.log('book not found')
    }
})


export default app;
