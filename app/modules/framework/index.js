import APPModule from './components/APPModule';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <APPModule {...this.props} />
    );
  }
}
