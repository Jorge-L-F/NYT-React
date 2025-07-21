/** @type {import('next').NextConfig} */
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const nextConfig = {};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig)
