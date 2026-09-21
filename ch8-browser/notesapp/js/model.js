let notes = []; // note = { key: id, note: noteTxt, softDeleted: false}
let id = 1;

export function getNotes() {
  return notes;
}

export function insertNote(noteTxt) {
  notes = [...notes, { key: id, note: noteTxt, softDeleted: false }];
  id++;
}

export function strikeThrough(key) {
  notes = notes.map((noteObj) =>
    noteObj.key === key
      ? { ...noteObj, softDeleted: !noteObj.softDeleted }
      : noteObj,
  );
}
