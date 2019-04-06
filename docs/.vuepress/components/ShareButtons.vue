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
          Tweet
        </a>
      </div>
      <!-- hatena bookmark -->
      <div class="btn-flex">
        <a
          :href="getHatenaUrl()"
          class="hatena-bookmark-button"
          data-hatena-bookmark-layout="basic"
          data-hatena-bookmark-height="28"
          data-hatena-bookmark-width="28"
          data-hatena-bookmark-lang="ja"
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
      <!-- Pocket -->
      <div class="btn-flex">
        <a
          :href="getPocketUrl()"
          target="_blank"
        >
          <i class="fab fa-get-pocket fa-2x"></i>
        </a>
      </div>
      <!-- LINE -->
      <div class="btn-flex">
        <a
          :href="getLineUrl()"
          target="_blank"
        >
          <i class="fab fa-line fa-2x"></i>
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
      share_url: 'https://cheatsheet.kitigai.org',
      twitter_url: 'https://twitter.com/intent/tweet?url={0}&text={1}',
      hatena_url: 'http://b.hatena.ne.jp/add?mode=confirm&url={0}&title={1}',
      pocket_url: 'http://getpocket.com/edit?url={0}&title={1}',
      line_url: 'https://social-plugins.line.me/lineit/share?url={0}'
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
    getTwitterUrl() {
      return this.formatByArr(this.twitter_url, this.share_url + this.$route.fullPath, this.$title);
    },
    getHatenaUrl() {
      return this.formatByArr(this.hatena_url, this.share_url + this.$route.fullPath, this.$title);
    },
    getPocketUrl() {
      return this.formatByArr(this.pocket_url, this.share_url + this.$route.fullPath, this.$title);
    },
    getLineUrl() {
      return this.formatByArr(this.line_url, this.share_url + this.$route.fullPath);
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
	justify-content: flex-end;
  align-items: center;
}

.btn-flex {
  margin: 0 10px
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
