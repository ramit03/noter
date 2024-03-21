import styles from "../styles/Note.module.css";
import stylesUtils from "../styles/utils.module.css";
import { Note as NoteModel } from "../models/notes";
import { Card } from "react-bootstrap";
import { formatDate } from "../utils/formatDate";
import {MdDelete} from "react-icons/md"
interface NoteProps {
  note: NoteModel,
  onNoteClicked: (note:NoteModel)=>void,
  className?: string,
  onDeleteNoteClicked:(note:NoteModel) => void,
}
const Note = ({ note,onNoteClicked, className,onDeleteNoteClicked }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;

  let createdUpdatedText: string;
  if (updatedAt > createdAt){
    createdUpdatedText = "Updated: "+formatDate(updatedAt);
  }else{
    createdUpdatedText= "Created: "+ formatDate(createdAt)
  }

  return (
    <Card
        className={`${styles.noteCard} ${className}`}
        onClick={()=> onNoteClicked(note)}
    >
      <Card.Body className={styles.cardBody}>
        <Card.Title className={stylesUtils.flexCenter}>
            {title}
            <MdDelete  
                className="text-muted ms-auto"
                onClick={(e)=>{
                    onDeleteNoteClicked(note);
                    e.stopPropagation();
                }}
                />
        </Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{createdUpdatedText}</Card.Footer>
    </Card>
  );
};

export default Note;