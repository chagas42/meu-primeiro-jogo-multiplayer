export default function createKeyboardListener() {

    const state = {
        observers: []
    }

    function subscribe(observersFunction) {
        state.observers.push(observersFunction);
    }

    function notifyAll(command) {
        for (const observersFunction of state.observers){
            observersFunction(command);
        }
    }

    document.addEventListener('keydown', handleKeydown)

    function handleKeydown(event) {
        const keyPressed = event.key; 
        const command = {
            playerId: 'player1',
            keyPressed
        }

        notifyAll(command)
    }
    return {
        subscribe
    }
}