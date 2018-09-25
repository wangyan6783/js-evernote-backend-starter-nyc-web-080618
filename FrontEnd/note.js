allNotes = [];

class Note {
  constructor(noteObj){
    this.id = noteObj.id;
    this.title = noteObj.title;
    this.body = noteObj.body;
    this.user = noteObj.user;
    allNotes.push(this);
  }

  renderTitle(){
    return `
    <p id="${this.id}" class="title">${this.title}</p>
    `
  }
  renderBody(){
    return `
    <p class="body">${this.body}</p>
    `
  }
}
