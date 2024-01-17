import './App.scss';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="min-h-[100vh] w-[100vw] overflow-hidden py-14 md:py-28 text-white bg-[#0F0F0F]">
       <h1 className="font-body text-2xl md:text-4xl text-center border-2 border-white w-fit mx-auto p-2 shadow-lg">Todo Application</h1>
         <TodoApp/>
    </div> 
  );
}

export default App;
