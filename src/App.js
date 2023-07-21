
import './App.css';

function App() {
  return (
    
    <div>
      
      <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Nome da Empresa</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Página Inicial</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Produtos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contato</a>
            </li>
            <li class="nav-item " id="log">
              <a class="nav-link" href="#">Login</a>
            </li>
            <li class="nav-item" id="log">
              <a class="nav-link" href="#">Registrar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main>
    
    <div class="jumbotron jumbotron-fluid bg-info text-white ">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1 class="display-4">Bem-vindo à Nossa Loja! </h1>
            <p class="lead">A melhor seleção de produtos para você.</p>
          </div>
          <div class="col-md-6 d-none d-md-block">
            <img src="13.png" alt="Imagem do Jumbotron" class="img-fluid rounded"></img>
          </div>
        </div>
      </div>
    </div>

    
    <section class="container mt-5">
      <div class="row">
       
      </div>
    </section>
  </main>
  
  <section class="container mt-5">
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="imagem-produto-1.jpg" class="card-img-top" alt="Produto 1"></img>
          <div class="card-body">
            <h5 class="card-title">Nome do Produto 1</h5>
            <p class="card-text">Descrição detalhada do produto 1.</p>
            <p class="card-text"><strong>Preço: R$ 99,99</strong></p>
            <a href="#" class="btn btn-primary">Comprar agora</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="imagem-produto-2.jpg" class="card-img-top" alt="Produto 2"></img>
          <div class="card-body">
            <h5 class="card-title">Nome do Produto 2</h5>
            <p class="card-text">Descrição detalhada do produto 2.</p>
            <p class="card-text"><strong>Preço: R$ 79,99</strong></p>
            <a href="#" class="btn btn-primary">Comprar agora</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="imagem-produto-3.jpg" class="card-img-top" alt="Produto 3"></img>
          <div class="card-body">
            <h5 class="card-title">Nome do Produto 3</h5>
            <p class="card-text">Descrição detalhada do produto 3.</p>
            <p class="card-text"><strong>Preço: R$ 129,99</strong></p>
            <a href="#" class="btn btn-primary">Comprar agora</a>
          </div>
        </div>
      </div>
      
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="imagem-produto-4.jpg" class="card-img-top" alt="Produto 4"></img>
          <div class="card-body">
            <h5 class="card-title">Nome do Produto 4</h5>
            <p class="card-text">Descrição detalhada do produto 4.</p>
            <p class="card-text"><strong>Preço: R$ 59,99</strong></p>
            <a href="#" class="btn btn-primary">Comprar agora</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="imagem-produto-5.jpg" class="card-img-top" alt="Produto 5"></img>
          <div class="card-body">
            <h5 class="card-title">Nome do Produto 5</h5>
            <p class="card-text">Descrição detalhada do produto 5.</p>
            <p class="card-text"><strong>Preço: R$ 149,99</strong></p>
            <a href="#" class="btn btn-primary">Comprar agora</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="imagem-produto-6.jpg" class="card-img-top" alt="Produto 6"></img>
          <div class="card-body">
            <h5 class="card-title">Nome do Produto 6</h5>
            <p class="card-text">Descrição detalhada do produto 6.</p>
            <p class="card-text"><strong>Preço: R$ 199,99</strong></p>
            <a href="#" class="btn btn-primary">Comprar agora</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer class="bg-dark text-white text-center py-3 mt-5">
    <p>&copy; 2023 Nome da Empresa. Todos os direitos reservados.</p>
  </footer>

    </div>
  );
}

export default App;
