# README

# アプリケーション名	
## Restly


# アプリケーション概要	
忙しい現代人に対し、このアプリは意識的な休息を促し、学習や仕事のパフォーマンス向上をサポートします。忙しい日常に、質の高いリフレッシュを提供します。

# URL	
https://resuly.onrender.com

# Basic認証
ID：nago0427

PASS：1998


# 利用方法	
## 休憩時間計測・記録
* トップページのタイマーを開始（デフォルトは５分で今後、時間設定機能実装予定）
* 5分経過後記録ボタンが出現し、休憩時間がアカウントに保存される
## やらないことリスト
* やらないことを３つまで設定可能
* やらないことリストをタップすることで編集可能
## 1コラムの活用
* 体や脳を効率よく休ませるための豆知識を１分で読めるコラムへまとめました。時間がない方でも隙間時間でチェックできます。

# アプリケーションを作成した背景	
* 20代から50代の子育てや仕事に励む社会人に向けた、質の高い休息を提供することが目的です
* 制作に至った背景に前職の不規則な勤務体系からなかなか疲れが取れず試行錯誤した経験からこのアプリケーションが生まれました
* たどり着いたのが何もしない時間の確保です
いい習慣を取り入れる足し算ではなく、やらないと決めたことを守る引き算に着目しました

実装した機能についての画像やGIFおよびその説明※	実装した機能について、それぞれどのような特徴があるのかを列挙する形で記載。画像はGyazoで、GIFはGyazoGIFで撮影すること。

# 実装予定の機能	
* 休憩終了後に労いの言葉を表示させる
* 任意の休憩時間を設定できる
* スマホのスクリーンタイムを記録・分析
* マイページにてカレンダーやグラフでのデータ表示
* コラム記事のお気に入り機能
* SNS共有
* LINEへの通知機能

# データベース設計	
[![Image from Gyazo](https://i.gyazo.com/ab046c13f0443dde3618430dd29f572e.png)](https://gyazo.com/ab046c13f0443dde3618430dd29f572e)

# Users テーブル
| Column             | Type      | Options                   |
|--------------------|-----------|---------------------------|
| nickname           | string    | null: false               |
| email              | string    | null: false, unique: true |
| encrypted_password | string    | null: false               |

#### Association
- has_many :break_times
- has_many :not_todo_lists


# break_times テーブル
| Column      | Type      | Options                            |
|-------------|-----------|------------------------------------|
| break_time  | time      | null: false                        |
| user        | references| null: false, foreign_key : true    |

#### Association
- belongs_to :user


# not_todo_list　テーブル
| Column      | Type      | Options                                   |
|-------------|-----------|-------------------------------------------|
| text        | text      | null: false                               |
| user        | references| null: false, foreign_key : true           |

#### Association
- belongs_to :user


# columns テーブル
| Column      | Type      | Options                         |
|-------------|-----------|---------------------------------|
| text        | text      | null: false                     |


# favorites テーブル
|Column       | Type      | Options                         |
|-------------|-----------|---------------------------------|
| user        |references | null: false, foreign_key: true  |
| column      |references | null: false, foreign_key: true  |

#### Association
- belongs_to : :users
- belongs_to ::columns



# 画面遷移図	
[![Image from Gyazo](https://i.gyazo.com/e82e3cdd1b71bdff5fdfa15dfbddf987.png)](https://gyazo.com/e82e3cdd1b71bdff5fdfa15dfbddf987)

# 開発環境	
* Ruby on rails
* JavaScript
* Renderにてデプロイ

# 工夫したポイント
直感的に使用していただける様、最小限の機能に絞り込み実装しました
また、ユーザーの継続するハードルを下げるためやらない習慣に着目したこと、
質の高い休息のための知識を提供します

# 改善点
実際に使用してもらいフィードバックをアプリケーションへ反映させていく予定