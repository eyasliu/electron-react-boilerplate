import APPModule from './components/APPModule';

export default class App extends Component {
  render() {
    return (
      <APPModule {...this.props} />
    );
  }
}
