

function App(){
  return (
    <h1>Hello, I'm default export</h1>
  )
}

function NamedExpoOne(){
  return(
    <h2>Hello, I'm namedExpoOne</h2>
  )
}

function NamedExpoTwo(){
  return(
    <h2>Hello, I'm namedExpoTwo</h2>
  )
}

export {NamedExpoOne,NamedExpoTwo};
export default App;