import { useState } from "react";
import styles from "./Search.module.css";
import { PlusCircle } from "@phosphor-icons/react";
import TaskCards from "../TaskCards";
import Task from "../Task";

function Search() {

  const [tasks, setTasks] = useState([]);
  //array de string vazia por causa que vai ser um texto e conceito de imutabilidade.
  const [newTask, setNewTask] = useState([""]);

  function handle() {
    event.preventDefault();
    //salvei o valor digitado do usuario o estado na variavel para nao perder
    // const handleNewTask = newTask;
    //passei como objeto o novo valor, por causa do checkbox que será gerado
    const newObjTaks = {
      text: newTask,
      checked: false,
    };
    //estou passando a variavel com state atual armazenado, para o state que vai ser renderizado.
    setTasks([...tasks, newObjTaks]);

    setNewTask("");
  }
  //atualizando quantas tasks foram completadas ou retiradas
  const completedTasks = tasks.filter((task) => task.checked).length;

  //clonando a lista e retornando uma nova lista somente com os itens concluidos
  function handleTaskCompletion(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  }
  //removo as tasks da lista atualizada.
  function removeTask() {
    const removeNewTask = [...tasks];
    removeNewTask.pop();
    setTasks(removeNewTask);
  }
  return (
    <>
      <section className={styles.search}>
        <label className={styles.searchIpt}>
          <input
            required={true}
            type="text"
            //salvando o value do input
            value={newTask}
            //pegando value do input
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Adicione uma nova tarefa"
          />
        </label>
        {/* função que vai criar o novo componente apos o click */}
        <div onClick={handle} className={styles.searchBtn}>
          <button>Criar</button>
          <PlusCircle size={24} />
        </div>
      </section>
      <section className={styles.taskHeader}>
        <div className={styles.taskCreated}>
          <p>
            {/* passando quantas tarefas criadas */}
            Tarefas criadas <span>{tasks.length}</span>
          </p>
        </div>
        <div className={styles.taskDone}>
          <p>
            {/* quantas tarefas concluidas concatenando com quantas tarefas existem; */}
            Concluidas <span>{completedTasks + " de " + tasks.length}</span>
          </p>
        </div>
      </section>
      <section className={styles.newsTasksCards}>
        {/* se estiver vazio a lista vai manter esse componente e se não vai fazer minha interação renderizando meu componente com suas funções */}
        {tasks == "" ? (
          <Task />
        ) : (
          tasks.map((content, index) => {
            return (
              <TaskCards
                key={index}
                content={content}
                handleclicks={() => handleTaskCompletion(index)}
                deleteTask={removeTask}
              />
            );
          })
        )}
      </section>
    </>
  );
}

export default Search;
