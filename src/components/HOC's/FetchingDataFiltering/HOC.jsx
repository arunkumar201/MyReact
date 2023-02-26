/** @format */

import React from "react";

const HOC = (WrappedComponent, entity) => {
  return class extends React.Component {
    state = {
        data: [],
        Input: "",
      };
    componentDidMount() {
      let FetchData = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
        let data = await res.json();
        console.log(data);
        this.setState({ ...this.state, data: data });
      };
      FetchData();
    }

    render() {
    //   let { Input, data } = this.state;
    //   console.log("🚀 ~ file: HOC.jsx:27 ~ HOC ~ render ~ data:", data);
    //   let FilterData = data.filter((d) => {
    //   if (entity === "users") {
    //       let { name } = d;
    //       return name.indexOf(Input) >= 0;
    //     }  if (entity === "todo") {
    //       let { title } = d;
    //       return title.indexOf(Input) >= 0;
    //     }
    //     return false;
    //   });
      
            let { Input, data } = this.state;
            let FilterData = data.filter((d) => {
              if (entity === "users") {
                const { name } = d;
                return name.indexOf(Input) >= 0;
              }
              if (entity === "todos") {
                const { title } = d;
                return title.indexOf(Input) >= 0;
              }
            });
      return (
        <>
          <div>
            <h1>{entity}</h1>
            <input
              type="text"
              value={Input}
              onChange={(e) =>
                this.setState({ ...this.state, Input: e.target.value })
              }
            />
          <WrappedComponent data={FilterData}/>
          </div>
        </>
      );
    }
  }
};

export default HOC;
