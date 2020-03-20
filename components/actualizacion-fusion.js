// actualizaciones de estado se fusionan

// su estado puede contener varias variables independientes
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }

//   Luego puede actualizarlos de forma independiente con setState()llamadas separadas
componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
}