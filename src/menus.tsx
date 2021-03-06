import * as React from "react";
import * as ReactDOM from "react-dom";
import * as axios from "axios";
import { Menu } from "./types";
import { MenuCard } from "./card";

interface State {
  menus: Menu[];
}

export class Menus extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      menus: []
    };
  }

  private baseURL = "https://api.shokujin.jp/menu/";
  private getMenu = (time: string) => 
    fetch(this.baseURL + time)
      .then(res => res.json())
      .then(json => this.setState({menus: json as Menu[]}))
  );

  componentDidMount() {
    this.getMenu("today")
  }

  render() {
    return (
      <div>
        {this.state.menus.map((menu: Menu) => {
          return <MenuCard key={menu.id}
                           name={menu.name}
                           price={menu.price}
                           category={menu.category}
                           description={menu.description} />
        })}
      </div>
    )
  }
}