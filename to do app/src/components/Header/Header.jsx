import { Form } from '../Form/Form';

export function Header() {
  return (
    <div>
      <header>
        <h1>TO DO APP</h1>
      </header>
      <Form placeholder='Name your task' />
    </div>
  );
}
