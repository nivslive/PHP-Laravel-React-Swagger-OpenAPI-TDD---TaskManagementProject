const ErrorPage = (props: any) => {
  if(props.typeError === 'db') {
    return (
        <div className="container text-center mt-5">
            <h1 className="display-1">Erro no servidor. </h1>
            <p className="lead">Tente novamente mais tarde.</p>
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