import { weekOneData } from "@data/weekOne";

export const WeekOne = () => {
  const input = weekOneData;

  const partOne = () => {
    const lines = input.split("\n");

    const calVals: string[] = [];
    lines.map((line) => {
      const digits = line.match(/\d/g);
      if (digits) {
        calVals.push("" + digits[0] + digits[digits.length - 1]);
      }
    });

    const sum = calVals.reduce((acc, curr) => acc + Number(curr), 0);

    return {
      calibrationValues: calVals,
      sum: sum,
    };
  };

  const partTwo = () => {
    const lines = input.split("\n");

    const numbers: Record<string, number> = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    };
    const calVals: string[] = [];

    lines.map((line) => {
      const row: string[] = [];
      for (let i = 0; i < line.length; i++) {
        if (parseInt(line[i]) > 0) {
          row.push(line[i]);
        }
        Object.keys(numbers).map((number) => {
          const match = line.slice(i, number.length + i);
          if (match === number) {
            row.push(String(numbers[number]));
          }
        });
      }
      calVals.push([row[0], row[row.length - 1]].join(""));
    });

    const sum = calVals.reduce((acc, curr) => acc + Number(curr), 0);

    return {
      calibrationValues: calVals,
      sum: sum,
    };
  };

  const partOneResult = partOne();
  const partTwoResult = partTwo();

  return (
    <div className="flex flex-row gap-4">
      <h1>Week One</h1>
      <div>
        <h2>Input:</h2>
        <pre>{input}</pre>
      </div>
      <div>
        <h2>Calibration values (Part 1)</h2>
        <pre>{partOneResult.calibrationValues.join("\n")}</pre>
      </div>
      <div>
        <h2>Calibration values (Part 2)</h2>
        <pre>{partTwoResult.calibrationValues.join("\n")}</pre>
      </div>
      <div>
        <h2>Sum (Part 1)</h2>
        <pre>{partOneResult.sum}</pre>

        <h2>Sum (Part 2)</h2>
        <pre>{partTwoResult.sum}</pre>
      </div>
    </div>
  );
};
