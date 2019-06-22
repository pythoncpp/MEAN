function fucntion1() {
    console.log('inside function1')
}

function fucntion2() {
    console.log('inside function2')
}

function executor(func) {
    func()
}

executor(fucntion1)
executor(fucntion2)