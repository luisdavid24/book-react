render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
//En este codigo se analiza si el elemento es currently o not 
//usando esta sintaxis {isLoggedIn ? 'currently' : 'not'}.