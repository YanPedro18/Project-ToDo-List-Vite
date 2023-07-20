import Container from "../Container";
import {ClipboardText} from '@phosphor-icons/react'
import styles from './Task.module.css'

function Task() {
  return (
    <Container>
      
       <div className={styles.notTask}>
            <ClipboardText size={72} />
            <h1>Voce ainda não tem tarefas cadastradas</h1>
            <p>Crie tarefas e organize seus itens a fazer</p>
       </div>
    </Container>
  )
}

export default Task;