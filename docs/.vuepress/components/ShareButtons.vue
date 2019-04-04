<template>
  <div id="ShareButtons">
    <ul class="fa-2x">
      <li>
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          class="twitter-share-button"
          data-show-count="false"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <i class="fab fa-facebook"></i>
      </li>
      <li class="hatena-icon">
        <div>
        <a
          href="http://b.hatena.ne.jp/entry/"
          class="hatena-bookmark-button"
          data-hatena-bookmark-layout="basic"
          data-hatena-bookmark-width="28"
          data-hatena-bookmark-height="28"
          title="このエントリーをはてなブックマークに追加"
        >
            <img
              src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
              alt="このエントリーをはてなブックマークに追加"
              width="20"
              height="20"
              style="border: none;"
            />
        </a>
        </div>

      </li>
      <li>
        <a
          :href="lineUrl"
        >
          <i class="fab fa-line"></i>
        </a>
      </li>
      <li>
        <a
          data-pocket-label="pocket"
          data-pocket-count="none"
          class="pocket-btn"
          data-lang="en"
        >
          <i class="fab fa-get-pocket"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShareButtons',
  data () {
    return {
      url: `https://cheatsheet.kitigai.org${this.$route.path}`,
      twitter_url: '',
      facebook_url: '',
      hatena_url: '',
      line_url: 'https://social-plugins.line.me/lineit/share?url={0}',
      pocket_url: ''
    }
  },
  methods: {
    formatByArr(msg) {
      // フォーマット（引数可変（配列）版）
      var args = [];
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
      // URLエンコード
      args = args.map(x => encodeURIComponent(x));
      return msg.replace(/\{(\d+)\}/g, function(m, k) {
        return args[k];
      });
    },
    // それぞれパラメータを埋め込む
    twitterUrl() {
      return this.formatByArr(this.twitter_url, this.url, this.title);
    },
    hatebuUrl() {
      return this.formatByArr(this.hatebu_url, this.url, this.title);
    },
    pocketUrl() {
      return this.formatByArr(this.pocket_url, this.url);
    },
    lineUrl() {
      return this.formatByArr(this.line_url, this.url)
    }
  }
}
</script>

<style>
#ShareButtons li{
  list-style: none;
  float: left;
  margin: 5px 10px;
}

.hatena-icon {
  text-align: center;
}

.fa-twitter {
  color: #1DA1F2;
}

.fa-facebook {
  color: #3B5998;
}

.fa-line {
  color: #00c300;
}

.fa-get-pocket {
  color: #ED4255;
}
</style>
