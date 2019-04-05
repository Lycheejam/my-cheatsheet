<template>
  <div id="ShareButtons">
    <ul class="fa-2x buttons">
      <li>
        <!-- Twitter -->
        <a
          :href="getTwitterUrl()"
          class="twitter-share-button"
          data-lang="ja"
          data-show-count="false"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li class="hatena-icon">
        <!-- hatena bookmark -->
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
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShareButtons',
  data () {
    return {
      share_url: `${location.origin}`,
      twitter_url: 'https://twitter.com/intent/tweet?url={0}&text={1}'
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
.buttons li {
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
