interface ProgressBarProps {
  step: number;
  total: number;
}

export default function ProgressBar({ step, total }: ProgressBarProps) {
  const percent = (step / total) * 100;
  return (
    <div className="w-full bg-gray-300 rounded h-2 mb-4">
      <div
        className="bg-blue-500 h-2 rounded"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
