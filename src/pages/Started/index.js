import React from "react";
import "./style.scss";
import Card from "../../components/Card";
function Started() {
  return (
    <Card>
      <h1 className="text-center text-[30px]">Component Animation</h1>
      <div className="mt-6" >
        <h2 className="mt-6">Table aztan</h2>
        <table class="styled-table w-full">
          <thead >
            <tr>
              <th className="text-start">Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default Started;
