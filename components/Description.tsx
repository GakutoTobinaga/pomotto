import Image from 'next/image';
export default function Description() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold mb-4">
        ポモドーロタイマーとは何ですか？
      </h1>
      <div className="mb-4">
        <div className="flex flex-row">
          <Image
            src="https://prtimes.jp/i/45990/6/resize/d45990-6-301422-2.jpg"
            alt="cirillo.jpg"
            className="inline-block w-32 h-32 mr-4 float-left"
          />
          <div>
            ポモドーロタイマーは、作業や学習を一定の時間（通常は25分）集中して行い、その後短い休憩（通常は5分）を取るという作業効率化テクニックです。この手法は、1980年代にイタリアのフランチェスコ・チリロ(起業家・発明家)によって提唱されました。ポモドーロ（イタリア語でトマト）という名前は、チリロが使っていたキッチンタイマーがトマト型だったことに由来しています。ここでは、ポモドーロテクニックのこなし方と、このサイトについて説明します。
          </div>
        </div>
        <div className="italic">Francesco Cirillo</div>
      </div>
      <div className="clear-both"></div>
      <h2 className="text-xl font-semibold">
        ポモドーロテクニックの基本的な手順
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <strong className="font-semibold">
            作業を25分間集中して行う（ポモドーロ）
          </strong>{' '}
          <div>
            タスクに取り組む時間を25分に設定します。
            この間、他のことに気を取られずに集中して取り組みます。
          </div>
        </li>
        <li>
          <strong className="font-semibold">5分間の休憩を取る</strong>{' '}
          <div>
            25分の作業後に、5分間の休憩を取ります。リラックスしたり、ストレッチをしたりしてリフレッシュします。
          </div>
        </li>
        <li>
          <strong className="font-semibold">
            4ポモドーロごとに長めの休憩を取る
          </strong>{' '}
          <div>
            4セットのポモドーロ（つまり4回の25分の作業とその後の休憩）を終えた後に、長めの休憩（通常は15-30分）を取ります。これにより、疲労を軽減し、長期的な集中力を保つことができます。
          </div>
        </li>
      </ol>

      <h2 className="text-xl font-semibold">ポモドーロタイマーの利点</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong className="font-semibold">集中力の向上：</strong>{' '}
          短い時間で集中して作業することで、効率的にタスクに取り組むことができます。
        </li>
        <li>
          <strong className="font-semibold">疲労の軽減：</strong>{' '}
          定期的な休憩を取ることで、疲労やストレスを軽減し、長時間の作業に耐えられるようになります。
        </li>
        <li>
          <strong className="font-semibold">タスクの分割：</strong>{' '}
          大きなタスクを25分のセッションに分割することで、複雑な仕事も取り組みやすくなります。
        </li>
        <li>
          <strong className="font-semibold">作業の計画と進捗の可視化：</strong>{' '}
          作業の進捗を確認しやすくなり、日々の計画を立てやすくなります。
        </li>
        <li>
          <strong className="font-semibold">モチベーションの維持：</strong>{' '}
          25分の作業という短い時間なので、モチベーションを持続しやすくなります。
        </li>
      </ul>
      <h2 className="text-xl font-semibold">このサイトについて</h2>
      <div className="list-disc pl-5 space-y-2">
        このサイトは、ポモドーロテクニックをもっと多くの方に使って欲しいとの思いから作成しました。
        従来、同様のポモドーロテクニックを行えるサイトはありましたが、「最初のポモドーロに至るまでのモチベーション」が課題となっていました。
        そこで、当サイトでは積み重なったポモドーロ数の進捗を確認する、ランキングボードを掲載するなど、「もっと、ポモドーロがしたくなるような」サイトを目指して開発しています。
      </div>
      <h2 className="text-xl font-semibold">開発ロードマップ</h2>
      <div className="list-disc pl-5 space-y-2">
        <ul>
          <li className="font-bold">ポモドーロ機能を追加</li>
          <li className="font-bold">ログイン機能・保存機能を追加</li>
          <li className="font-bold">ランキング機能を追加</li>
          <li>マイページ機能を追加</li>
        </ul>
      </div>
    </div>
  );
}
