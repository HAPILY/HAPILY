<script>
export default {
  middleware() {
    console.log("logout");
    window.localStorage.removeItem("type");
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("token");
    window.location.href = "/login";
  },
};
</script>
