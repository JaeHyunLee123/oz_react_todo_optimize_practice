import { memo } from 'react';
import TodoItem from './TodoItem';

const TodoListComponent = ({ todos, onToggle, onDelete, onEdit }) => {
    return (
        <>
            {todos.length === 0 ? (
                <div className="py-4 text-center text-gray-500">할 일이 없습니다. 새로운 할 일을 추가해보세요!</div>
            ) : (
                <div className="mt-4">
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
                    ))}
                </div>
            )}
        </>
    );
};

const TodoList = memo(TodoListComponent);

export default TodoList;
