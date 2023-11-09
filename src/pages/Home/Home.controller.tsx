import { Component } from 'react';
import { HomeVM } from './Home.vm';
import { HomeComponent } from './Home.component';

export interface ControllerProps {
  vm: HomeVM;
}

export default class HomeController extends Component<ControllerProps> {

  render() {
    const { vm } = this.props;

    return (<HomeComponent vm={vm} />);
  }
}