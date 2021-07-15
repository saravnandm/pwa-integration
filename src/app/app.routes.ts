import { Routes } from "@angular/router"

import {
    AppJSResolve,
    AppExtensionJSResolve,
    AppVariablesResolve,
    AuthGuard,
    RoleGuard,
    EmptyPageComponent,
    PageNotFoundGaurd
} from "@wm/runtime/base"

import { LazyLoadScriptsResolve } from "./lazy-load-scripts.resolve"

const appDependenciesResolve = {
    appJS: AppJSResolve,
    appMetaConfig: AppExtensionJSResolve,
    appVariables: AppVariablesResolve,
    lazyLoadScriptsResolv: LazyLoadScriptsResolve
}

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: EmptyPageComponent,
        resolve: appDependenciesResolve
    },
    {
        path: "",
        resolve: appDependenciesResolve,
        children: [
            {
                path: "Login",
                pathMatch: "full",
                loadChildren: "./pages/Login/Login.module#LoginModule",
                data: {
                    pageName: "Login"
                }
            },
            {
                path: "Main",
                pathMatch: "full",
                loadChildren: "./pages/Main/Main.module#MainModule",
                data: {
                    pageName: "Main"
                }
            }
        ]
    },
    {
        path: "**",
        canActivate: [PageNotFoundGaurd],
        component: EmptyPageComponent
    }
]
