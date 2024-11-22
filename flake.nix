{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }: 
    flake-utils.lib.eachDefaultSystem (system: 
      let 
        pkgs = import nixpkgs { inherit system; };
      in {
        devShell = pkgs.mkShell {

          buildInputs = [
            pkgs.nodejs_22         
            pkgs.sqlite         
          ];

          shellHook = ''
            # Check if database exists
            if [ ! -f /database/listeningbird.db ]; then
              mkdir -p database
              touch database/listeningbird.db
            fi

            # Install dependencies
            npm install
          '';
        };
      });
}