import { Grid, GridBox } from "../components/dynamic/grid";

let array = [...Array(25)];

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="page-title">Raw Data List</h1>
      <Grid>
        {array.map((item, key) => (
          <GridBox
            key={key}
            image="/assets/bg.png"
            title="Test Title"
            description="This is a test description for a data share"
            code="Example code here"
            linkAction="/raw-data"
            authorAction="/"
          />
        ))}
      </Grid>
    </div>
  );
}
