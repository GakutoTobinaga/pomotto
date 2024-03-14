import Tomato from '../logos/Tomato';

export default function TooltipForTimer() {
  const tooltipString: string = '成果の保存には登録 / ログインが必要です';

  return (
    <div className="tooltip tooltip-bottom" data-tip={tooltipString}>
      <div className="cursor-pointer">
        <Tomato size={28} color="red" />
      </div>
    </div>
  );
}
