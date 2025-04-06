import "./Calendar.css";
export function Calendar({startDate}) {
    return (
      <div className="Calendar">
        <div className="header">Даты</div>
        <div className="monthLine">Сентябрь 2023</div>
        <div className="days">
          <div>пн</div>
          <div>вт</div>
          <div>ср</div>
          <div>чт</div>
          <div>пт</div>
          <div>сб</div>
          <div>вс</div>
          <div></div>
          <div></div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
        </div>
      </div>
    );
}