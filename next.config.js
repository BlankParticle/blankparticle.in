/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () =>
    [
      ["/(github|gh)", "https://github.com/BlankParticle"],
      ["/anime", "https://myanimelist.net/animelist/BlankParticle"],
      ["/music", "https://open.spotify.com/user/31krf3flzpa44udfgkc5a5xrqn7y"],
      ["/discord", "https://discord.gg/GRz7F2BRmp"],
      ["/(x|twitter)", "https://twitter.com/BlankParticle"],
    ].map(([from, to]) => ({
      source: from,
      destination: to,
      permanent: false,
    })),
};

export default nextConfig;
