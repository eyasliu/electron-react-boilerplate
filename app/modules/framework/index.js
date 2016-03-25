import APPModule from './components/APPModule';

export default class FrameWork extends Component {

  render() {
    return (
      <APPModule {...this.props} />
    );
  }
}
