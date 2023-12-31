const ErrorPage = (props: any) => {
  if(props.typeError === 'db') {
    return (
        <div className="container text-center mt-5">
            <h1 className="display-1">Erro de requisição com servidor. </h1>
            <p className="lead">Sua sessão pode ter finalizado. Clique logo abaixo para ir para página de login.</p>
            <a className="btn btn-primary" href="/login">Ir para página de Login</a>
        </div>
    );
  }
  if(props.typeError = 'notfound') {
    return (
        <div className="container text-center mt-5">
          <h1 className="display-1">404</h1>
          <p className="lead">Página não encontrada</p>
        </div>
      );
  }
  return <></>;
};

export default ErrorPage;