import React, { useState } from "react";
import * as styles from "./index.module.scss";
import Countdown from "../Countdown";

type BucketProps = {
  batchSize: number;
  onBatchFull: () => void;
  disabled: boolean;
};

const Bucket = ({ batchSize, onBatchFull, disabled }: BucketProps) => {
  const [count, setCount] = useState<number>(0);

  const updateCount = () => {
    const newCount = count + 1;
    const batchFull = newCount % batchSize === 0; // fix the "4 is a batch" issue
    setCount(newCount);
    if (batchFull) {
      onBatchFull(); // remove unused argument
    }
  };

  return (
    <button
      type="button"
      onClick={updateCount}
      className={styles.button}
      disabled={disabled}
    >
      {count} glasses poured
    </button>
  );
};

const ThreeButtons = () => {
  const [batchCount, setBatchCount] = useState<number>(0);
  const [timeIsUp, setTimeIsUp] = useState<boolean>(false);

  const handleFullBatch = () => {
    setBatchCount((prevCount) => prevCount + 1); // Update a value properly
  };

  return (
    <>
      {timeIsUp && <h1>Total {batchCount}</h1>}
      {!timeIsUp && !!batchCount && (
        <Countdown
          key={new Date().toISOString()}
          initialSeconds={5}
          label=""
          onFinish={() => setTimeIsUp(true)}
        />
      )}
      <Bucket onBatchFull={handleFullBatch} batchSize={3} disabled={timeIsUp} />
    </>
  );
};

export default ThreeButtons;
