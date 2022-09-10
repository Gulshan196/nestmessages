import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    let mid=messages.find(el=>el.id==id)
    console.log(mid)

    return mid;
  }

  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    if(messages){
      const id = Math.floor(Math.random() * 999);

      messages.push({ id, content });
    }

    await writeFile('messages.json', JSON.stringify(messages));
  }

  async delete(id: string){
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
 
      
    let newMessages = messages.filter(el=>el.id!=id)
    await writeFile('messages.json', JSON.stringify(newMessages));

  }

  async updateOne(id: string,content: string){
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

   console.log(id,content)
   
      
    let existing = messages.find(el=>el.id==id)
    existing.content = content
    console.log(existing);

    await writeFile('messages.json', JSON.stringify(messages));

  }

}