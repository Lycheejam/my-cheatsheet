<template>
  <div id="ShareButtons">
    <div class="btn-container">
      <!-- Twitter -->
      <div class="btn-flex">
        <a
          :href="getTwitterUrl()"
          class="twitter-share-button"
          data-lang="ja"
          data-show-count="false"
        >
          <i class="fab fa-twitter fa-2x"></i>
        </a>
      </div>
      <!-- hatena bookmark -->
      <div class="btn-flex">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareButtons',
  data () {
    return {
      share_url: null,
      twitter_url: 'https://twitter.com/intent/tweet?url={0}&text={1}'
    }
  },
  mounted: {
    function () {
      //this.share_url = location.origin
      this.share_url = 'https://cheatsheet.kitigai.org/'
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
    getCurrentPath: function() {
      return this.share_url.join($route.path);
    },
    getTwitterUrl: function() {
      return this.formatByArr(this.twitter_url, this.share_url, this.$title);
    }
  }
}
</script>

<style scoped>
#ShareButtons {
  max-width: 740px;
  margin: 0 auto;
  padding: 1rem 2.5rem;
}

.btn-container {
  padding: 0;
  margin: 0;
	display: flex;
	justify-content: space-around;
  align-items: center;
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
