import { Router } from './routes/routes';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<Router />
		</DndProvider>
	);
}

export default App;
