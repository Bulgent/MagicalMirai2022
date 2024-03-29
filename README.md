![LOGO_GIT](https://user-images.githubusercontent.com/88919409/179529633-9c3795fa-260b-4ae3-9faf-3e4c049e0757.png)
# Project Arcturus \~Starry Story\~
## -初音ミク「マジカルミライ 2022」プログラミング・コンテスト応募作品-

# DEMO
<a href="https://playcanv.as/p/9ikvfVCH/"><img src="https://playcanvas.com/static-assets/images/icons/favicon.png" width="19px;" /></a>
Play at PlayCambus : https://playcanv.as/p/9ikvfVCH/

<a href="https://youtu.be/a1aQ8EjRM44"><img src="https://www.gstatic.com/youtube/img/branding/favicon/favicon_144x144.png" width="20px;" /></a>
Video on YouTube : https://youtu.be/a1aQ8EjRM44

# Features
## 曲選択画面 - Select Song
 ![Select Song](https://user-images.githubusercontent.com/88919409/179776920-68727b33-b0f9-4bc9-95c2-944127205497.png)
 
 ラジオをモチーフにした曲選択画面を制作しました。
 - 曲選択画面では虫の声を流すことで、夏の夜が想起されるような演出をしています。
 - 曲にカーソルを合わせるとディスプレイにカタカナで曲情報が表示される、曲の読み込み時間にはノイズが流れる演出でラジオの持つレトロ感を強調しています。

## 再生画面 - Player
 ![Play](https://user-images.githubusercontent.com/88919409/179513306-ea4af81f-acfe-48b6-8533-a6473cfff04d.png)
 - ラジオから流れる音楽に合わせて星空に歌詞が生成され、文字が夜空に吸い込まれるように消えていき、星となります。そして、生成された星の一部は星座を形成します。生成された全ての星ではなく、一部の星が星座を形成することで、夜空に星座が過多に配置されないように心がけました。加えて、星座は他の星座と被らないように配置するように工夫しています。
 - 星座にマウスカーソルを当てるとミクさんがその星座の名前を教えてくれるようになっており、ただ星座を眺めるだけよりも親しみやすさのある星空となるようにしました。
 - 出てくる星座や流れ星の頻度はランダムでその時々で違った夜空が演出され、飽きない構成となっています。
 - 星の年周運動を意識し、星空を反時計回りに回転させることで歌詞で夜空が飽和しないように工夫しました。
 - サビになると星の色が変化し、流れ星の頻度が上がります。星座という場の雰囲気を変えずに自然とサビの演出をすることを意識しました。
 - 曲の再生、一時停止はミクさんの横に配置されているラジオでできるようになっています。曲選択画面との一貫性が保たれるように意識しました。

## 曲の終わり - Ending
 ![Song End](https://user-images.githubusercontent.com/88919409/179513412-9d990da0-4e9d-4ba5-9981-d7358564db81.png)
 - 歌詞の再生が終了すると、曲が流れ終わるに向かって徐々に空が白みはじめ、曲が終わったときには朝になります。これは、夜空は歌によって彩られていることと、もうすぐ曲が終わることを意識させる為です。

# Usage

Install Git, Python and run the command
```bash
git clone https://github.com/Bulgent/MagicalMirai2022.git
cd MagicalMirai2022

# If you use Python 2.x
python -m SimpleHTTPServer
# If you use python 3.x
python -m http.server
```
Then point your browser to http://localhost:8000

# Notes
適正画面サイズはFullHD(1920×1080)です。PCでの再生をおすすめします。

# Credit
<a><img src="https://avatars.githubusercontent.com/u/89962792" width="30px;" /></a> <a><img src="https://playcanvas.com/api/users/346277/thumbnail?size=50" width="30px;" /></a> Moritaka Aguro 🦄 (Pegasus)

<a><img src="https://avatars.githubusercontent.com/u/88919409" width="30px;" /></a> <a><img src="https://playcanvas.com/api/users/346279/thumbnail?size=50" width="30px;" /></a>  Ryota Kataoka 👽 (K.B.T.C.)

# Made with PlayCanvas
![PlayCanbus](https://user-images.githubusercontent.com/88919409/179517741-daf88e06-ff8b-4d75-a4e1-8e78e3f7e76c.png)
