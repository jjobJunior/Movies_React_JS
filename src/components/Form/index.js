import styles from "./Form.module.css";
import { categories } from "../Category";

function Form() {
  return (
    <section className={styles.container}>
      <h2>
        <strong>Cadastro de Videos</strong>
      </h2>
      <form>
        <div>
          <label>URL do video</label>
          <input
            type="text"
            placeholder="Digite a URL do video"
            required="required"
          />
        </div>
        <div>
          <label>Categoria</label>
          <select>
            <option value="-">Selecione uma categoria</option>
            {categories.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
      </form>
    </section>
  );
}
export default Form;
